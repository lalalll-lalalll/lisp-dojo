---
title: Introduction
order: 1
---

# Introduction

CLIM is a large layered software system that allows the user to customize it at each level. The most simple ways of using CLIM is to directly use its top layer, which contains application frames, panes, and gadgets, very similar to those of traditional windowing system toolkits such as GTK, Tk, and Motif.

But there is much more to using CLIM. In CLIM, the upper layer with panes and gadgets is written on top of a basic layer containing more basic functionality in the form of sheets. Objects in the upper layer are typically instances of classes derived from those of the lower layer. Thus, nothing prevents a user from adding new gadgets and panes by writing code that uses the sheet layer.

Finally, since CLIM is written in Common Lisp, essentially all parts of it can be modified, replaced, or extended.

For that reason, a user’s manual for CLIM must contain not only a description of the protocols of the upper layer, but also of all protocols, classes, functions, macros, etc. that are part of the specification.


## Standards

This manual documents McCLIM 1.0.0 which is a mostly complete implementation of the CLIM 2.0 specification and its revision 2.2. To our knowledge version 2.2 of the CLIM specification is only documented in the “CLIM 2 User’s Guide” by Franz. While that document is not a formal specification, it does contain many cleanups and is often clearer than the official specification; on the other hand, the original specification is a useful reference. This manual will note where McCLIM has followed the 2.2 API.

Also, some protocols mentioned in the 2.0 specification, such as parts of the incremental redisplay protocol, are clearly internal to CLIM and not well described. It will be noted here when they are partially implemented in McCLIM or not implemented at all.


## How CLIM Is Different

Many new users of CLIM have a hard time trying to understand how it works and how to use it. A large part of the problem is that many such users are used to more traditional GUI toolkits, and they try to fit CLIM into their mental model of how GUI toolkits should work.

But CLIM is much more than just a GUI toolkit, as suggested by its name, it is an interface manager, i.e. it is a complete mediator between application “business logic” and the way the user interacts with objects of the application. In fact, CLIM doesn’t have to be used with graphics output at all, as it contains a large collection of functionality to manage text.

Traditional GUI toolkits have an event loop. Events are delivered to GUI elements called gadgets (or widgets), and the programmer attaches event handlers to those gadgets in order to invoke the functionality of the application logic. While this way of structuring code is sometimes presented as a virtue (“Event-driven programming”), it has an unfortunate side effect, namely that event handlers are executed in a null context, so that it becomes hard to even remember two consecutive events. The effect of event-driven programming is that applications written that way have very rudimentary interaction policies.


At the lowest level, CLIM also has an event loop, but most application programmers never have any reason to program at that level with CLIM. Instead, CLIM has a command loop at a much higher level than the event loop. At each iteration of the command loop:

1. A command is acquired. You might satisfy this demand by clicking on a menu item, by typing the name of a command, by hitting some kind of keystroke, by pressing a button, or by pressing some visible object with a command associated with it;

2. Arguments that are required by the command are acquired. Each argument is often associated with a presentation type, and visible objects of the right presentation type can be clicked on to satisfy this demand. You can also type a textual representation of the argument, using completion, or you can use a context menu;

3. The command is called on the arguments, usually resulting in some significant modification of the data structure representing your application logic;

4. A display routine is called to update the views of the application logic. The display routine may use features such as incremental redisplay.


Instead of attaching event handlers to gadgets, writing a CLIM application therefore consists of:

* writing CLIM commands that modify the application data structures independently of how those commands are invoked, and which may take application objects as arguments;

* writing display routines that turn the application data structures (and possibly some "view" object) into a collection of visible representations (having presentation types) of application objects;

* writing completion routines that allow you to type in application objects (of a certain presentation type) using completions;

* independently deciding how commands are to be invoked (menus, buttons, presentations, textual commands, etc).


By using CLIM as a mediator of command invocation and argument acquisition, you can obtain some very modular code. Application logic is completely separate from interaction policies, and the two can evolve separately and independently.


## Development History

### Early years (1998-2000)

Mike McDonald started developing McCLIM in 1998. His initial objective was to be able to run the famous “address book” demo, and to distribute the first version when this demo ran. With this in mind, he worked “horizontally”, i.e., writing enough of the code for many of the chapters of the specification to be able to run the address book example. In particular, Mike wrote the code for chapters 15 (Extended Stream Output), 16 (Output Recording), and 28 (Application Frames), as well as the code for interactor panes. At the end of 1999, Mike got too busy with other projects, and nothing really moved.

Also in 1998, Gilbert Baumann started working “vertically”, writing a mostly-complete implementation of the chapters 3 (Regions) and 5 (Affine Transformations). At the end of 1999, he realized that he was not going to be able to finish the project by himself. He therefore posted his code to the free-CLIM mailing list. Gilbert’s code was distributed according to the GNU Lesser General Public License (LGPL).

Robert Strandh picked up the project in 2000, starting from Gilbert’s code and writing large parts of chapters 7 (Properties of Sheets) and 8 (Sheet Protocols) as well as parts of chapters 9 (Ports, Grafts, and Mirrored Sheets), 10 (Drawing Options), 11 (Text Styles), 12 (Graphics), and 13 (Drawing in Color).

In early 2000, Robert got in touch with Mike and eventually convinced him to distribute his code, also according to the LGPL. This was a major turning point for the project, as the code base was now sufficiently large that a number of small demos were actually running. Robert then spent a few months merging his code into that produced by Mike.


### Consolidation (2000–2002)

Following the early development of McCLIM, the project entered a period of consolidation, unifying the code base and expanding its functionality. In 2000, Arthur Lemmens developed the first version of the gadget library, while Bordeaux students Iban Hatchondo and Julien Boninfante, hired by Robert, implemented pane protocols and additional gadgets such as push buttons, demonstrated through a simple calculator demo.

A major milestone came at the LSM-2000 meeting in Bordeaux in July of 2000, where Gilbert Baumann merged his work on regions and transformations with the main code base written by Mike, Robert, Iban, and Julien. This created a unified system with near-complete support for regions, transformations, sheet protocols, ports, graphics, mediums, panes, and gadgets.

Meanwhile, Mike was again able to work on the project, and during 2000 added much of the missing code for handling text interaction and scrolling. In particular, output recording could now be used to redisplay the contents of an interactor pane. Mike and Robert also worked together to make sure the manipulation of sheet transformations and sheet regions as part of scrolling and space allocation respected the specification.

One of the first complex applications built on McCLIM during this period was Gsharp, an interactive score editor. Gsharp served as a “killer app”, exercising many toolkit features. As part of the Gsharp project, Robert wrote the code for menu bars and for a large part of chapter 27 (Command Processing). Julien Boninfante also extended the system to allow images as button labels.

Additional contributions came from Bordeaux students Gregory Bossard, Michel Cabot, Cyrille Dindart, Lionel Vergé, Loïc Lacomme, Nicolas Louis, Arnaud Rouanet, and Lionel Salabartan. They worked on efficient 2D image rendering, file-selector gadget, and various minor protocols. Arnaud Rouanet and Lionel Vergé were later hired in the summer of 2001 and worked on output recording, various sheet protocols, and the first version of the PostScript backend. They also developed CLIM-fig, a demonstration of output recording. Arnaud Rouanet became increasingly involved with McCLIM, contributing fixes and new code for regions, graphics, and CLX mediums.

Timothy Moore contributed essential functionality to the presentation system, including presentation type definitions, method dispatch, and the core present and accept methods. He also began developing input editing streams, which formed the basis for the Goatee editor written in 2002.

Alexey Dejneka implemented table formatting, bordered output, and extended the PostScript output facility. Meanwhile, Brian Spilsbury worked on internationalization support, including enabling Unicode in SBCL and CMUCL, and also contributed to a GTK-like gadget set and early OpenGL backend work.

By 2002, McCLIM had evolved into a robust, unified system capable of supporting complex applications like Gsharp and providing a solid foundation for the rapid expansion that followed.


### Expansion (2003-2009)

From 2003 onward, McCLIM entered a period of rapid functional growth, evolving from an experimental system into a fully usable and extensible graphical toolkit. Core infrastructure saw significant improvements, including enhancements to the presentation system, gadget support, formatting, and backend integration. Mike McDonald (2003-2004) continued to refine compatibility across implementations and integrated external patches, ensuring a solid foundation for further development. Alexey Dejneka (until 2003) contributed to output recording, formatting, presentations, and drawing primitives, helping stabilize the core functionality. In 2004 McCLIM hosting has moved to common-lisp.net.

During this period several contributors strengthened McCLIM’s core infrastructure. Andy Hefner (2003-2010) worked on the presentation system, formatting, gadgets, and backends, and implemented a native Lisp TrueType renderer and the clim-listener. Gilbert Baumann (2003-2005, 2010) worked on core functionality including the space allocation protocol and gadgets, authored most of the X11 backend with antialiased fonts, and briefly returned in 2010 to improve the windowing subsystem. Timothy Moore (2003-2006) continued improving presentation system and added presentation histories. He worked on core infrastructure across whole system and designed the backend architecture.

During this period, input editing and editor functionality saw major advancement. Troels Henriksen (2006-2008) integrated and extended Drei, a port of Climacs’ input editing substrate, which replaced Goatee as the core input system, bringing incremental redisplay, syntax highlighting, and buffer management. Christophe Rhodes (2003-2010) contributed to command processing, layout optimization, and Drei integration, alongside portability and core system improvements. Max-Gerd Retzlaff (2005-2006) worked on panes and dialogs, improved clim-listener, and wrote the extensions Conditional Commands and tab-layout, as well as the demo Town Example. David Lichteblau (2006-2008) focused on backend rendering, substantially improving performance and stability.

System-wide infrastructure also advanced through improved Unicode and buld system support (Andreas Fuchs, 2005-2008), as well as portability, core protocol correctness, and documentation improvements (Robert Strandh, 2003-2010). Duncan Rose (2004-2006) worked on porting McCLIM to Cocoa, which yielded enhancements benefiting all backends. Dan Barlow (2003-2005) improved SBCL compatibility and documentation, while Peter Scott (2005-2008) contributed numerous smaller, targeted improvements.

This period also saw McCLIM supporting notable applications like Closure, Gsharp, and Climacs, with contributors often working across the system and these projects. Together, these efforts transformed McCLIM into a functional, extensible graphical toolkit suitable for real-world applications.


### Hiatus and maintenance (2009-2015)

Starting from 2009 project development went on hiatus with occasional commits from Tim Moore and Robert Strandh, who maintained McCLIM until other developers joined in. During that time development moved to GitHub repository under Robert Strandh’s profile.


### Revival and modernization (2016-present)

From 2016 onward, McCLIM entered a period of sustained revival and modernization. Daniel Kochmański (2016-present) began by improving portability, replacing platform-specific multiprocessing code with a portable bordeaux-threads layer. Later that year, Robert Strandh (2016-present) brought him on as a maintainer, and together they organized a fundraiser with bounties to encourage wider community involvement, providing crucial support for ongoing development.

Between 2016 and 2018, the focus was on cleanup and building the community. McCLIM repository moved to a separate organization (still on GitHub). Alessandro Serra (2016-2017) fixed numerous gadget issues and implemented a software renderer based on cl-vectors, while Elias Mårtenson (2016-2018) improved the CLX backend and rewrote the FFI freetype renderer to ensure proper text shaping. Nisar Ahmad (2017-2022) conducted extensive testing across the system, reporting bugs and suggesting improvements that significantly enhanced overall stability.

From 2019 to 2021, development emphasized refactoring and performance. Jan Moringen (2017-2022) and Daniel Kochmański (2016-present) co-maintained the project, performing extensive peer reviews, improving documentation and introducing comprehensive test suites to strengthen reliability and specification compliance. The geometry module was overhauled, the CLX backend was rewritten for faster rendering, transformations were accelerated, and transparency support was added. During this period, Cyrus Harmon (2017-2019) contributed fixes to printing and geometry and developed a PDF backend, further extending McCLIM’s capabilities.

From 2022 onward, the focus shifted to new functionality and modernization of core subsystems. from Daniel Kochmański (2016-present) refactored the native TrueType renderer, introduced kerning and transformed text support, rewrote input editing, and implemented abstractions for completion and accept-values, while making drawing to CLIM streams thread-safe. Andrea De Michele (2018-present) contributed extensively through testing, patches, and new demonstration examples, while Charlie McMackin (2024-present) began work on the Wayland backend, improving gadgets and implementing missing slider options to better align with the specification. In 2023 McCLIM repository has been moved from GitHub to Codeberg.

These combined efforts of cleanup, refactoring, and feature development transformed McCLIM into a robust, maintainable, and extensible graphical toolkit ready for contemporary applications.

























