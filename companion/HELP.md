# ProPresenter API

This "ProPresenter API" module ia NEW module that allows you to remotely control ProPresenter via it's <a href="https://openapi.propresenter.com" target="_blank">public API</a> (released in version 7.9).  
It does not replace that OLD ProPresenter module that uses a *reverse-engineered* remote control protocol to control _older versions of ProPresenter_.  
  

**There are now TWO ProPresenter modules!**  
This new module works with version 7.9 and later...  
The old module works with older versions before 7.9 - Including version 6.  
  
This new module has a lot more features and will be actively developed going forward.  Howeverm the old module does have 1 or 2 features that are not (yet) supported in the ProPresenter API and therefore only the old module can do those.  
It's important to know that you CAN run both at same time.  You can try the new version and slowly move to it - keeping the old version around for as long as it suits you!  
  

### 🚧 WORK IN PROGESSS 🚧  
The module is still a work in progress - you will find it's missing some things that you might expect.
But it is complete "enough" to be tested and "early adopters" may find it useful now.
Over time, more features will be added.  
Please also note that this documentation is also an incomplete, work in progress.

### Configure ProPresenter To Be Controlled By Companion:
To setup this module you will need the to do the following as a minimum:  
✅ **Enable Network** must be enabled in ProPresenter Network Settings.  
✅ Enter the computer **IP Address (or Hostname)** and the ProPresenter network **Port** (both are shown in ProPresenter Network Settings)  

### Getting Started:
#### Presets:
All presets are build around assumption that you have topbar turned off - I may have to revisit this, if a lot of people like to keep the topbar on.
The fastest and easiest way to define buttons is to use Presets.  
Presets are ready-made buttons with text, actions, feedback and some with nice icons that you don't need to create from scratch.
Although these are not yet complete, with more on the way, there are a already a lot of great presets to get you started.  
Even if you prefer building button actions, and feedbacks yourself, the presets have some nice icons!

#### Actions:
For those that want to build their own buttons (and triggers) - you will be using the built in actions for this.  
  
**ACTIVE vs FOCUSED**  
Before you get started building buttons with actions, it's important to become familiar the concept of ACTIVE vs FOCUSED in ProPresenter.  
When you trigger a slide in a presentation - that presentation becomes the "ACTIVE Presentation". The slide has an Orange (or Green) border to show it's triggered/live.
Did you know that you can click on a another presentation and the slide that you clicked on **stays live**?  This is not common, but you *can* go wandering off an look at other presentations while your triggered slide in the "ACTIVE Presentation" **stays live**.  Any Presentation that you are looking at - is the "FOCUSED Presentation". You can focus (click to look at) any presentation you want without making it ACTIVE.  It becomes the ACTIVE Presentation if/when you click a slide in that presentation. Also, note that if you clear the slide, the ACTIVE presentation does not change, it retains that status of being ACTIVE.  
The same concept of ACTIVE/ vs FOCUSED is also true for all presentation playlists, media playlists and audio playlists.
THIS IS IMPORTANT.. When choosing to add an action to a button, start with this in mind - which one of these do I want my button to act upon - the active thing or the focused thing?  
The actions are cleaerly labelled to say which they work with.
  
  
The concept of active vs focused is very important with triggering. As you can imagine, triggering the "next" slide in the Active presentation vs the Focused presentation can have very different results when the focused and active presentations are not the same.  

**Compound Actions**
Once you figure out what you want to target and choose an Action that targets what you want, you will notice that within each action - many have multiple commands/operations.
Variables are support in many actions inputs - Note, where there is a dropdown to pick, they is usually a manual option to enter text or variables (See below for more on varaibles)  
Concept of UUID vs indexes and names (indexes - counting starts at 0, UUID are globally unique Id's for many objects in ProPresenter.  Several of the module variables show the UUIDs for your use if you like.  TODO: Add Learn function for focused UUID) - Be careful with UUID - (TODO: explain how UUID of playlist item and UUID of presenation are not the same)
For the action: "Specific Presentation: Command", you can use "Active Presentation UUID" variable to get uuid of active presentation - this is a globally unique identifier of that presentation that should not change.
hh:mm:ss or mm:ss or ss (any # of digits, etc)
Note that setting a timer will change it;s name if you do nto perform an operation...and will set it's "allows Overrun"
TIPS:  
* Use ? on Action inputs for useful tips/instructions.  
* Explore the button preset to learn and get great starting points.  
* The Trigger Next/Previous operation, targeting Presentation focuses the active slide (It might be the only way to focus the active slide - as all other trigger operations on Active or Focuses presenation don't seem to)


#### Variables:
Can be used on button labels - can be used in many action inputs.
Some variables have a dynamic number (eg timers, stage display layouts).  You will notice that the id has the uuid which is a bit confusing, but this long uuid is globally unique and allows these variables to always work even if the names have duplicates.  In these cases, the description has the friendly names.
Custom time format is configurable in settings, with a default of 'mm:ss' to hide the hours.  
Time Since Last Status Update (Trigger a module restart when it gets over a limit - not too often!!!)  
  
#### Feedbacks:
TODO: Explain more!!  
Feedbacks are typically used to update a button to show the state of something

#### Triggers:
TODO:  A couple of useful examples of triggers with ProPresenter
Calendar - trigger a specific presentation at a time.

#### Notes:
Note that a few API functions were introduced in later versions of ProPresenter so there might be one or two actions that don't work if you are running an older version of ProPresenter.  
  
Find My Mouse - handy for setups with multiple screens using native outputs.  
  
Arrangements - Do you use arrrangements? - If you want to do some actions that rely on knowing about presentation arrangements, you will have to wait for a future API update by RV. API support for working with arranged presentation is conspicuously missing from the current API.  There are no endpoints that include any arrangement info. Consequently there is no reliable way to get total slide count of a presentation (seems odd doesn't it)

Messages: Triggering supports text tokens only (Showing a dynamic number of text tokens for each select message, hurt my brain a bit - I kinda dread adding timers to the mix.  For now, timers can be configured and started seperately)

If you use  to "Presentation: PresentationUUID: Index: Trigger" to trigger a specific slide in a specific presentation that is not the currently active presentation in a playlist - you might expect a subsequent call to "Presentation: Active: Focus" to change focus to it within that playlist - but it does not, it will focus it in the library it lives in.
You can however, trigger the **first** slide in *any* specific presentation in a playlist using "Playlist: ID: Index: Trigger" and then once it's the active presentation you can then trigger specific slides within it with "Presentation: Active: Index: Trigger"

When using a Timer set action to update a timer, I have seen that doing an operation (start/reset) too soon after you have updated it seems to revert the changes made by timer set action - wait a little while or use the option to set AND perform operation.

Variables are not yet "reset" when disconnected or connection is lost - the last values just stay!

Many dynamic variables use UUID in ID instead of name - Names can contain invalid characters for variable names. Also, ProPresenter allows duplicates names for items and Companion variable names must be unique.  This has the drawback of not being very readable when reading expressions tha tcontain these variables.  The nice thing about uuid is that is never changes - so you can rename objects as often as you like in ProPresenter and the _uuid_ style variables that refer to them will continue to work.

Setting a timer allow rename IF you choose "None" for the optional operation

A momentray flash of warning - when a request fails - check debug log (prob invalid input in an action for a button or trigger)

Looks are identified by name or index.... UUID of live look does not match any UUID of the list of configured looks  
  
🎹 **Optional MIDI Listener:**  
There is an optional MIDI listener to enable remote control (pushing buttons) of Companion through MIDI. You can send a **Note-On** message to Companion through a shared MIDI-Port to cause a remote button press.

Midi Channel = Button Page.  
The numerical value of the Note-On = Row of button.  
Note-On Intensity = Column of button.  

In the config section, choose an existing MIDI port in the "Midi Port" dropdown OR pick the last option in the dropdown "Custom Virtual Port" to create a local (non-networked) custom virtual port with any name you choose.  
You need to enter the port number that your Companion is configured to listen to (if you have changed it from the default of 8000) as there is no way for this module to "know" what port your Companion is listening on.  (This Port is configured in the main window of Companion).  
Note: On MacOS the MIDI portname will be the Device Name + a space + the Port Name. For Example: If you were using the IAC Driver with the default device name of "IAC Driver" and with a custom port named "Pro7Companion", the full portname would be "IAC Driver Pro7Companion".  
  
Tip: Make sure that the MIDI port you setup for this is only used as a destination and NOT a source in Pro7 MIDI settings - otherwise you will probably feedback MIDI notes that you intend to send out to Companion, straight back into Pro7, and they will trigger unintended actions within Pro7 itself.