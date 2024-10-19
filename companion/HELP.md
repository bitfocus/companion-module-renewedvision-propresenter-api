# ProPresenter API

This is a BETA module that replaces the old ProPresenter module but uses the new open API instead of the the old *reverse-engineered* remote protocol.  
🚧 WORK IN PROGESSS 🚧  
The module is not yet complete - you will find it's missing actions, variables, presets and feedbacks that you might expect.
But it is complete "enough" to be tested and "early adopters" may find it useful now.
Over time, more actions, variables, presets and feedbacks will be added.  
THIS DOCO IS NOT YET COMPLETED - It's barely started!  

This (Beta) Companion module allows you to remotely control ProPresenter via it's <a href="https://openapi.propresenter.com" target="_blank">public API</a>  
It will NOT work with older versions of ProPresenter that do not have the public API (<7.9).  
You can use the older "ProPresenter" module for versions of ProPresenter less than 7.9.  

### Configure ProPresenter To Be Controlled By Companion:
To setup this module you will need the to do the following:  
✅ **Enable Network** must be enabled in ProPresenter Network Settings.  
✅ Enter the computer **IP Address** and the ProPresenter network **Port** (both are shown in ProPresenter Network Settings)  

### Instructions for use:
Use ? on Action inputs for useful tips/instructions.  

#### Actions:
TODO:  
For basic triggering of next/previous, there are lots of actions that can do this with very sutble differences. The best place to start is the **Trigger: Operation** - use that unless you *know* you want one of the other trigger next/previous actions
Introduce concept of active vs focused vs specified - THIS IS IMPORTANT.. Start with this in mind - which one of these do I want to act on??? and then choose a command within the action!
Within each action - many have multiple commands/operations.
Introduce variables/support in actions (eg show stage message)
Introduce the quick lists - many have option to manually specifying (and using variables)
Concept of UUID vs indexes and names (indexes - counting starts at 0, UUID are globally unique Id's for many objects in ProPresenter.  Several of the module variables show the UUIDs for your use if you like.  TODO: Add Learn function for focused UUID) - Be careful with UUID - (TODO: explain how UUID of playlist item and UUID of presenation are not the same)
For the action: "Specific Presentation: Command", you can use "Active Presentation UUID" variable to get uuid of active presentation - this is a globally unique identifier of that presentation that should not change.
hh:mm:ss or mm:ss or ss (any # of digits, etc)


#### Variables:
Some variables have a dynamic number (eg timers, stage display layouts).  You will notice that the id has the uuid which is a bit confusing, but this long uuid is globally unique and allows these variables to always work even if the names have duplicates.  In these cases, the description has the friendly names.
Custom time format 'mm:ss'
Time Since Last Status Update (Trigger a module restart when it gets over a limit - not too often!!!)

#### Presets:
Presets are ready to drag and drop actions with nice icons (note the format of two lines of text with TopLine\n\n\nBottomLine)


### Notes:
Note that a few API functions were introduced in later versions of ProPresenter so there might be one or two actions that don't work if you are running an older version of ProPresenter.  

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