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

- A command is acquired. You might satisfy this demand by clicking on a menu item, by typing the name of a command, by hitting some kind of keystroke, by pressing a button, or by pressing some visible object with a command associated with it;

- Arguments that are required by the command are acquired. Each argument is often associated with a presentation type, and visible objects of the right presentation type can be clicked on to satisfy this demand. You can also type a textual representation of the argument, using completion, or you can use a context menu;

- The command is called on the arguments, usually resulting in some significant modification of the data structure representing your application logic;

- A display routine is called to update the views of the application logic. The display routine may use features such as incremental redisplay.


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