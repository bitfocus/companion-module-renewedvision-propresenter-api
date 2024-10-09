# companion-module-renewedvision-propresenter-rest

This is the "ProPresenter API" module that uses the open ProPresenter API made availabe in ProPresenter version 7.9 and later.
This module is still in beta.

TODO: Dev Notes:
Uses ProPresenter npm module (esp for RegisterStatusCallbacks)
Dynamic Variables (based on ProPresenter state)
Dynamic Action Options (based on ProPresenter state)
ProPresenterStateStore stores state - refreshed at startup and during status updates
Lot's of Action Input Options are defined in utils.ts - There is a lot of "logic" tied up in visibility (due to multiple actions being grouped/consolidated into single actions with option pickers for sub-actions)

See [HELP.md](./HELP.md) and [LICENSE](./LICENSE)