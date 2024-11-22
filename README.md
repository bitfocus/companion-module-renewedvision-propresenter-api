# companion-module-renewedvision-propresenter-api

This is the "ProPresenter API" module that uses the open ProPresenter API made availabe in ProPresenter version 7.9 and later.
This module is still in beta.

TODO: Dev Notes:
Uses ProPresenter npm module (esp for RegisterStatusCallbacks)
Dynamic Variables (based on ProPresenter state)
Dynamic Action Options (based on ProPresenter state)
ProPresenterStateStore stores state - refreshed at startup and during status updates
Lot's of Action Input Options are defined in utils.ts - There is a lot of "logic" tied up in visibility (due to multiple commands/operations being consolidated into single actions with dropdown command pickers for choosing commands)

MacOS command example for converting png's to 100 char wide base64 strings for png64:
base64 -b 100 -i Next.png | sed 's/$/\\/' > Next.txt

See [HELP.md](./HELP.md) and [LICENSE](./LICENSE)
