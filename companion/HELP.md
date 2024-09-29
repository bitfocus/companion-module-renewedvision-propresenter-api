# ProPresenter API

This is a BETA module that replaces the old ProPresenter module but uses the new open API instead of the the old *reverse-engineered* remote protocol.  
🚧 WORK IN PROGESSS 🚧  
THE MODULE IS NOT YET COMPLETED.  
THIS DOCO IS NOT YET COMPLETED.  
But it is complete "enough" to be tested (and you may find it useful).

This (Beta) Companion module allows you to remotely control ProPresenter via it's <a href="https://openapi.propresenter.com" target="_blank">public API</a>  
It will NOT work with older versions of ProPresenter that do not have the public API (<7.9).  
You can use the older "ProPresenter" module for versions of ProPresenter less than 7.9.  

### Configure ProPresenter To Be Controlled By Companion:
To setup this module you will need the to do the following:  
✅ **Enable Network** must be enabled in ProPresenter Network Settings.  
✅ Enter the computer **IP Address** and the ProPresenter network **Port** (both are shown in ProPresenter Network Settings)  

### Instructions for use:

#### Actions:
TODO:  
Introduce concept of active vs focused.
Introduce concept of naming convention (Actions are logically grouped by their naming convertion)
Introduce how to search for actions, knowing the naming convention
Introduce concept of trigger actions (vs say, presentation trigger)


#### Variables:
Some variables have a dynamic number (eg timers, stage display layouts).  You will notice that the id has the uuid which is a bit confusing, but this long uuid is globally unique and allows these variables to always work even if the names have duplicates.  In these cases, the description has the friendly names.


### Known Issues:
Note that a few API functions were introduced in later versions of ProPresenter so there might be one or two actions that don't work if you are running an older version of ProPresenter.