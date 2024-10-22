import { combineRgb, CompanionFeedbackDefinitions, CompanionInputFieldDropdown, DropdownChoice } from '@companion-module/base'
import { ProLayersStatus } from './utils'
import { DeviceConfig, InstanceBaseExt } from './config'

export function GetFeedbacks(instance: InstanceBaseExt<DeviceConfig>): CompanionFeedbackDefinitions {
    const feedbackDefinitions: CompanionFeedbackDefinitions = {
        Layer: {
			name: 'Layer',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 192, 192),
			},
			options: [
				{
					id: 'layer',
					type: 'dropdown',
					label: 'Layer',
                    tooltip: 'Any layer will trigger this feedback if any layer is active',
                    choices: [
                        {id: 'audio', label:'Audio'},
                        {id: 'messages', label:'Messages'},
                        {id: 'props', label:'Props'},
                        {id: 'announcements', label:'Announcements'},
                        {id: 'slide', label:'Slide'},
                        {id: 'media', label:'Media'},
                        {id: 'video_input', label:'Video Input'},
                        {id: 'any', label:'Any Layer'},
                    ],
					default: 'slide',
				},
			],
			callback: (feedback) => {
                if (feedback.options.layer == 'any') {
                    return Object.values(instance.propresenterStateStore.proLayersStatus).some(status => status) // If ANY layer is on then return true!
                } else {
				    return instance.propresenterStateStore.proLayersStatus[feedback.options.layer as keyof ProLayersStatus] // If select layer is on then return true
                }
		    },
        },
        ActiveLook: {
			name: 'Active Look',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 255, 255),
				color: combineRgb(110, 110, 110),
                png64: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAZCAYAAABD2GxlAAATFXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjapZppciM7DoT/\
                        8xRzhOJOHodrxNxgjj8fwNLmdrRf97PbllousUAsmQlQZv3vv9v8h6+YUzAh5pJqShdfoYbqGk/Kdb6a/rZX0N/65R5/s5+vG1vv\
                        Pzhe8jz689+S7usfr9vnAueh8Sy+LVTG/Yf++YcanhZ8LuTOgxeL5Pm8F6r3Qt6dP9h7gXa2daVa8vsW+jqP9/uPG/gx8iuUT7N/\
                        +X/GezNyH+/c8tZf/PY+HQO8/ATjm/xBfxd3Xm78jvrKY6s45Ds/Pb/ws9liavj2oo+oPJ99idbtAbb2JVrB3Zf4L05Oz8dvXzc2\
                        fvmDf97fvd85lPuZ+3zdJxuPRV+8Lz97z7J1z+yihYSr072pxxb1Gdd1biG3LgbT0pX5iSyR9bvyXdj8IBXmNa7O97DVOqKybbDT\
                        Nrvt0sdhByYGt4zLPHFuOK8vFp9ddYPYWR/k226XffXTF2I5NOzBu6ctVm9br2H0boU7T8ulzrKY5S1//G3+9A17SylYK75sx1fY\
                        5Zw4GzMkcvKby4iI3bdTozr48f31S+LqiWAUL0uJVJbuZ4ke7QsJvAbac2Hk8dSgzfNeABdx64gx1hMBokYl2GSv7Fy2FkcWAtQw\
                        nQJynQjYGN3ESBcoL2JDJXFr3pKtXuqi42XD64AZkYg++Uxsqm8EK4RI/uRQyKEWfQwxxhRzLLHGlnwKKaaUchJQbNnnYDI4mXMu\
                        ueZWfAklllRyKaWWVl31gGasqeZaaq2tcc/Gyo13Ny5orbvue+jR9NRzL732NkifEUYcaeRRRh1tuukn+DHTzLPMOtuyi1RaYcWV\
                        Vl5l1dU2qba92WHHnXbeZdfdnlG7w/rL9x9Ezd5RcxopuTA/o8arOT+WsAInUWJGwJwJlohnCQEJ7SRmV7EhOImcxOyqjqqIDiOj\
                        xGxaiRgRDMu6uO0jdsadiErk/lXcTA4fcXN/GzkjofvDyP0at++iNgWEh0bsVKE49fJUH9c0V5pQ7S+PKxkf0y4lLpvmtaOvPazJ\
                        bsOGeMCuvvDTTrnGbmu8hq8UjG/WztV6Lm0vF1IBTc2e0WH9jhcbXIiAihl4PK1SRmfjIAdBHSuGmcu1y9xxdsLldhmAynXF3H1Z\
                        JpU11/Kjz9IpaTsSnohhBYo0x+jnKpef0S9n8whkAfer60qYje2+Y7tfi61t10fHtrFdW9kSEbsixM/7d268T/wgEuA8rropk9Vm\
                        Yn+7rHw8YavZo/RQ8pjbuzDL4N8Iq/lCNm/c0bG85T0cxMIrW1g/dXl05JE8LufwpAnidr96n1cfwbe4S02jru1D6W33MHsLJbmU\
                        t5vVE1D2nKzs15a8cmw5LqJqrvl0PMuvORJZUCLuxM+h5jTfPN/cm+e5pPDreH6ZEtNsfdaRfcjkk+09ucF9eRbJ21Eg2dVaxmQ0\
                        zqQsesfz0+1B6nCryttnNrO2ORfw6/pmT/wIknoAoa6Cc/C+7HjNtkvqgG+dcW3nawuUQ574BJy+uqlzwKhJJF6OiTzrQ2IdiHUB\
                        qUcSSuUNnhKQTCuNhFkzZZeWBc+pWqK2hhm5ji4MhU8kBrjHrqvu3a6Z9wqNeAJVSNbIg5uxjRzHxk+ULpXGHepOleqvccVRKQAQ\
                        pFQbNoGxq107UUEfOeTwhSeL9p2YBI3E9KeozKOqts9jnMTsyXvX+7VixM9Y/khM0qTl6bJkuQR2TNDtrBSNH7sDIBk0sntW3jyW\
                        Df09vUGKviJAHggYbrLgPZAFfORqx3Sxz75Nrbfb65y2O9SyY4E2fCdTNjf2d5r5i/KOn063HjjNVymtA2zetZ2SJ8soC4HvEPkn\
                        QvnnxwgADIDIXma1KrZemAfmVZuBudRJ2RkA1j2otdFqyFoXwFAMmbwmHHjCDq01Erk7I087xE+ogVagYLROtU5uIvcQB4Q+SEL8\
                        NNlGtcQ2yg0CssyFYnUf0STygLw/pmYp740873ZmT9W0TFW0MjBgtjBX2rUS/0RE0BxUXasXDEAeG8kNICb6XdSqS9Oywk15b5tl\
                        E5SxlLbFw+LzU9rNUtoka4jUKKWN0LJpEQNqG37MOarXJx5YHi3UZqY2eXvfE6W5wl1jEEfyYQSbfYcRkzdVGpkZC4m8W9qSs2R8\
                        JgDdAca8e+Y1ZqJQQf/qx0h5dPLFeuo7YJHdFeYkalPcAgJSETBmOiUEZM05qNYxql/TCg7D1YFf42LDICcuZsWgCDqCcYJOh4zG\
                        hV+lFrOYFOIcfkUy3uFocHUQEjwyPEw3ARkiKT6ERah+a9YuDWNusEnqiIlCqG6uCRyCmA3tvXL2Nnm4akjeg4z56pKWsoqDBsxZ\
                        pWaFLJDUySqHovALEoHc4WlHuhQXh4Clv1eRHjE+9mb8fOyNxGFv+dNJmjlnb5I7qBEUPV0ruAt4kBsRLClE1xDe0CW8Vu0hvF4U\
                        xfY+s9cg0I2GEXPCKRBgahwIJT2AUPJEINRMpNAGRw5bg6F0JtKvwB9UWFqjeTQJJB8ViUhrkCh4RSIlWyfM2IvJ+T0uMUgN1yJ4\
                        RmahZzJ3ng+2c4P1oJ+b7dguhG2V7QypRTUXobu9pCIATOBhhymlMhxEIgSL3qdkXCJn4UEYwvFgweoHdZt4sLL4m7pRTQvlcKi7\
                        QA2SvtEprZEBcdW+L095CnjMGzv8hmnBU4J6wwcVcuCDCgEhwVHuzqqZjq++4ZMTOEmX6BWpEO5B1HKQtNiXJLqHUkkqDKctOBQ6\
                        GwTmdpTYk2UR7pQm64YhRSGSMpiTU4/c+vYxV5YW84EX69LocI1zVf7fHMyHP9um8RNXqUxB1tRMX0xByf8DdCfOR82dJe1ka06v\
                        ReuCJ1zccf4UgxGjmE+Jb2FXliebrFyaoJgdAp4CYF/2WUERQEcXS7kpDM5uNxrSDjDY4wHesSlMlquieXW5gQEgf5R7fbtteZPY\
                        IFGT94kZaoSMVLzaqLn03Ap3f21lbN3ofC43hqm3EeypyVu2GsFyaHu5nRj72gyeeW5GfFN1s2KfkX2zPqgGSUlQ0OUSFF2UoPgT\
                        FImJZQcSkaVLERO9hpgASRWm/QcJQPNE2Q5Xkxfqduso85pErwB3JSw0ZO+u9bQA4z4hMCqQ1iSJjtkV5QJglOhoTcAL9OuRXLIE\
                        nU8A3iqaqAD+Kc0RyYAumxW4s1vr6Z2Ov2FjJE7YgguL9wLT0RAHUHwsL+sXbogfE1XU7BztdAD4IVHHHVfBkls0IZoDTYiB5dF9\
                        GFuaBaJty+TgBAN7hm6g+pHL8CIvbKPROiKcQiS28SnCfaQrSyrCDWWIcgWkvqgNdMS0Gvuj+i3s+qb57a35y0N3GhjiTXh6FZ5k\
                        0VaO+QOKMd9yDK5HUyA8eZvgx77oHlXqoSdBu0xLvOhEJHDhojMYxQDuoIEFalV0omdFAiDqsK16uJ+0hySI18rSHdFsaSsDfIlO\
                        IGReE9RI24Z6DydmIjKc4KINqAwaa19lbkDUwdpc9q+V/SgqI0X6Km6l8b9icfNO49Rz0DW36HECq+AerEw6aixazChYEWZYUQAL\
                        SCOecjb9UvOsFC9ETcekelj6CBSbjTDnRqXTKdFpjJpoWFURwwj4oosg1pLAR/RApWT6riZ9V+8ox06/lK8THbR8G+4qgbYrHB0u\
                        fRM63Mr2i3Tk1k2EFqqYwKKKKT6YDCDaK7bGXSzcP6RzaMDPWDTc2uND/VTKqeRnoZg3NOgh1YEFKdIMDvgfMSE1pYryF2Y8vKik\
                        KH2pQRW6qt0HWYeTnPpksEE3aJfHacxQjz3bGClv9EmB03v/xCzzM6udRk1VlKu3/H4pxKO/Yza3FHEqwY9ExNBgRSKuqlkxEMIx\
                        i3zAYfR8pCRgddNW3k2beIo2h/xxhfTAXHOukD+LZo8/LSV09A+XosNvYHfuJ94AnbAYwKLhNqiXNiph03iTo6LGifcl8Sa1CLOl\
                        t9FCrdSvFLHmu3L/SFwE3iSYljYD1sJAkn/5eM3glmg3hfZE4pCR+SC7ZeUCO9DzXZ6cpwE+BgICBrzhfbeiE+iUhr01sZH+MzQ6\
                        jCwIKjMEmcOs9pg9WRimP7dqMH3NBgeXow2Hi6uF126dp2ty47Sn25+VhKmsj9J8pFuVmUDjwlL5lmU0daTAOLKMlqPGM0aSxiVF\
                        6XIhEfFJU3IAl3laaMQMbYwHxSy5NEQSgWfClgu+qphcEn1rzr/LoBNW80oR0bC/SYEfFjOf+fb3i5mHaVlVPUHbQh15+SoDNFX3\
                        HQ0y3ZlVaPNmcYe3UnE2FpBb+gpDK/w5Rfubx17QkAC9zJWkXKWTg8bf1XVuxJmYgX0EsCyQz18O8i5blURvTSZsYUsegc9e/fNO\
                        uHhL2lVhsAcPKAvw+uGBoumECEc51QpCfsMIL0L4hfgP7QvpXx7MvM0RGHka9IX/7e8p6d0YtcW8GXNM2XIOE37QIB/mqC3m33vn\
                        OMf8C+8A5jpe0pBTtBLz+jGQEVWi08RW6YFK+WS33r7LJvPlhRap2TPSXZitLfdg07EhTzSzSeoEVelQ4rrTeqX8CL8q1ucGdVLD\
                        pd+2L6/uRXRHViAvma0JkleA8R5nwYSh4m/siN3JePfSdL4ykky2FoBQuPTWt4+G3bwE7qNhv/XtadhV30rDXtEdXRBRB38uykSo\
                        n+G6ztaF19KItVyqKq1INPpExO0WpTe9uI7OFIELN6j+b3FEQJGGNA6VOl7PsjtAqhwBu/eqUkfGxIAvIrvn5xC01XHPO1rGB6hZ\
                        GaV7CGM0OvJmigzKKPGJdtrc4oAb/ad0S2OXWyfmlUR7gOHSzHucnJ7DkC2tA1t7TENUh55BdvLxyx7lLOW3uGR+BK7d6oZW77OT\
                        7KMvn+cPEzFCiejhSfaqv2qK5O8lHAnP70oiWfuYieO9dItCH2raiHGV7HQ96Ntgkir2qnSPk9YpW3oY8JunNHp3KtK8qbfKkkRs\
                        iU5FjISyIjWJ8veh1wzlU329aquUPEBCATQypdAU5uSEDEmcqVNt78/g9J4NnsGpUXCW4eB1JqdnOHgmpzIcFI61UuEaJh8b2fMx\
                        gIZJV5fTdV5f6frcn6sPvf2chT719mMW2p8TaPoDDx29TaBbPFl0H8o8cUhnRq7jF5dj0jluGAhsS+Jn3Dhdmma+Jv7IjyyfO6H0\
                        pK8Yeb5mCB8TBFyvM4TrwIP+zXQ5urf3Hx+zjcIez7QKTODxfYLc9Wwgd4IuB/winuSswWiTtpUmL3akPRElgmdrQ8DPzzG5jD5c\
                        i9wSnZLeiBIWaaIUZVqL3M93XDDHJlCE5k5TD+jwAeWHA0iRzjrX0inUbCC3nk8YaeRAbWqAFmHhGHTU7toUCzGNG0OePbqCSF6N\
                        cjnCauDDS5x9OvSYXh368uvP1YT5+UKqZpzEUvX77FeePZy3dVSgNhzxGwU3LxG/aNUftstTdYy0eNdW7xpBJ017YK+qe88pW84d\
                        BxAwOWbzBNotHRY+3KtVJ61XCUrzhk5qB63rLuTcfF0PCr3T4W2auCQdpGGQlltKk9vf40RDcaYniZKJoZLwbMZP7z6Hpnq8tMgr\
                        aQvkcKlAYrSlMibLyejtyUbpq/w4BJ4ehwY3gUOZLssBuRD4+tqunGMuEx4D4nsS497biZHuAbEOYqrOhw+OL1gHIthTYcL2ZURm\
                        Xacvb5aYyrQ30mDTlyu8yeEurW2XVlcb3EdbHpxUxEzalodolvAzm6cOss7UK2qBH4mTzjL04CKln1rWV0+bgwjvW2j32lI4Z4yA\
                        lB4yCoquQN8TwGYK4KNrHcO8ZpvfjzYBHTD+PoWJ72pn6eHJQ+6Yh5K/Fc94HGD7M2X/Udg8ju3Mj+d6v29ln52s+aaVLaJeiI7M\
                        soQ8yMYu052y5OMQOvYpVeZYrcrU59IplpFTLJYvAsX/prs1r/b2r7tbxRtz2twR/D5Ts7fJT5yr0VrKhz+UBEcpFiyM18dY7m5y\
                        jXxKQuSgqzK0pEG69hE8C6a0Vea7+3xgIiBISPRqdV4aRFNaYVN64p3keFU4ppwUPJrsyicDVZLNNST/rveDyw6hADRU3Mm/djna\
                        rBXmfSoTJftkaiczOxC/34c98FMUrIchY9vnAwKjwsB63rMdbxzWvJ8kytDuu8EPvcM1n+NsqfDzgYeAM0+H7oNZr4H2Kq+BNuLq\
                        N4eud5I6yq3fhzoGceLD+hgEgwqvY513Oq3ujHitnHjB+Zty1RqlfzLcQUcu7aSznsKrGD/pnN6mmKW8hpjPM1lV4pf3Rj86QUF9\
                        DIkf537y0YkGLvky25BTp3q9qOTTOvNu3m3d9H888U/J/Drxp0jkoyEPMkK5ot8Ftj6P1w8TATCkWCySkEPcK5L/S4p9m2G/fnRA\
                        jp5gdHNOruXzXyGOKZPlAzU5CAXpDCgFMlsOoj7PGJGIbwN0808n6ONLpfYvaWb2nWXyCcWIm+WzZyxKOyToL58boPRsQlmt1+lk\
                        JwX45eDO80mn6sw5Wr9Ln3ahC9BlNeyQVH+N3GvQD+2Ux0GJsuwtgIwGmko0/we3hBu9UmGhsAAAAYRpQ0NQSUNDIHByb2ZpbGUA\
                        AHicfZE9SMNAHMVfW6VaKg5WEHHIUDvZRUUcaxWKUCHUCq06mFz6BU0akhQXR8G14ODHYtXBxVlXB1dBEPwAcXZwUnSREv+XFFrE\
                        eHDcj3f3HnfvAH+zylSzJwGommVkUkkhl18Vgq8IIYh+DCMmMVOfE8U0PMfXPXx8vYvzLO9zf44BpWAywCcQJ5huWMQbxDObls55\
                        nzjCypJCfE48YdAFiR+5Lrv8xrnksJ9nRoxsZp44QiyUuljuYlY2VOJp4qiiapTvz7mscN7irFbrrH1P/sJwQVtZ5jrNMaSwiCWI\
                        ECCjjgqqsBCnVSPFRIb2kx7+UccvkksmVwWMHAuoQYXk+MH/4He3ZnFq0k0KJ4HeF9v+GAeCu0CrYdvfx7bdOgECz8CV1vHXmsDs\
                        J+mNjhY9Aga3gYvrjibvAZc7wMiTLhmSIwVo+otF4P2MvikPDN0CoTW3t/Y+Th+ALHWVvgEODoFYibLXPd7d193bv2fa/f0AcfRy\
                        poTy29oAAA5eaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJl\
                        U3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1F\
                        eGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgog\
                        IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4w\
                        L21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAg\
                        ICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2Vs\
                        ZW1lbnRzLzEuMS8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0i\
                        aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOmM1ODk1OWY2\
                        LTc1YjQtNDM5MC1hNzFlLWUxMTBlMmM3NzQ4NyIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkMTkxM2ViOS1mOTlkLTQ0\
                        MGItOTYyMy00YzM3NDUyZGIwNTUiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1OWY5YjE0Yi1mMzlkLTQ3\
                        YWItYjE5Mi0wMzVlYWQ0YjJmMjciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09Ik1hYyBPUyIKICAgR0lNUDpU\
                        aW1lU3RhbXA9IjE3MjkyNDM1MTU5OTc2NzgiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zNiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9w\
                        bmciCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFE\
                        YXRlPSIyMDI0OjEwOjE4VDIwOjI1OjE1KzExOjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyNDoxMDoxOFQyMDoyNToxNSsxMTow\
                        MCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVk\
                        IgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYxOWFmY2YwLWViZjUtNDQ3\
                        Ny04NWU1LTlhMDUzYTkxMWQzZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChNYWMgT1MpIgogICAgICBz\
                        dEV2dDp3aGVuPSIyMDI0LTEwLTEzVDIxOjEyOjE3KzExOjAwIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNh\
                        dmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjdjOTA1ZThjLWI5OTMt\
                        NDkwZS05YzQ4LWM3ZWQzMjA3ODU2YSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChNYWMgT1MpIgogICAg\
                        ICBzdEV2dDp3aGVuPSIyMDI0LTEwLTE4VDIwOjI1OjE1KzExOjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9y\
                        eT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAK\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\
                        ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94\
                        cGFja2V0IGVuZD0idyI/Pm9ckP8AAAAHdElNRQfoChIJGQ+CDTv8AAADPklEQVRIx+2XX2iWZRjGf1/b/FdL5yR6SCdZOkEX3WPi\
                        QVphRCfraFCh9Ic8jA4jNCY2CESPNkWm4kGxg6TaPBCiOtIaxua6EhQMGy01fA3W3Nz6Jrp9HXQLb5/f++3d920edcMLz7/ruS+e\
                        576v+3kzzMLMbD2wCVgK3ATOSbo0A2YD0OiYEaBP0uW0PjMpidUAu4CmAtN9wD5JN/MwtcBHwLMFML3Afkm3yiZoZtXAIWCVD90G\
                        rgMBWOhjV4D3JE04ZhlwGHjc5yeBCHgCqPKxQeB9SZPF/FemOMB3Y+Q+A7ok3TWzSuBN/+qATjMbA3JAjZPLAceBE5KmzKzK93sd\
                        eMqxx0o+QTNbCPQAi4CvJR0osOZD4JWELU5K6iiA2QO8CIwBLZKmkjg8NMPp1Tk5gG8S1nwba58F+mP9mTCPeqiUfMULYu2JhDXj\
                        sXYXsNgzPS1mQTECM53gHx5HuFQUsnvj077+WoG5JMxdT7jSCLp0yLvvmFl9AV18y7sDksYk/Qlc9LGdZrYmD7MR2O7dHyVly83i\
                        TpeZxcAhM/sB+B1YDWwBKlx6jsQwh4F2oNqz+3vgKvAk8JwfTBY4OldCvRloBZYUmJ4A2iT152G2ALtjSRa3MWCvpJ/nhKA7XA60\
                        eDWpAf4CzgFfSRpJwKyIYZYCw155uiWN8r89AMvMFuB1tsWlYllK2Ajwk4fD6LwQNLMM8BrwdkLgp7Es8CnwhaRcGkCFO28OIQxH\
                        UZRNIFcLtAGvppSmJKvyhGkIIQwU8xdC2BZF0eV7Qt0MtJvZ0/mnZmYv+4ukcQ5DqxE4bmYv+c3Efa4FOvww/r1iM9sKfAxMAWeA\
                        C8AjwAvAmnnOg0HgtOtpA7DVb7ZVUm8mxrzNK0M5dt4rzroy9zkjaW9+Ld4HDJW58ef+lWO/Afv/kyQAURTdCSGc9vioLWHjU5K+\
                        jKJoKISwssTQ+AX4QNL4fQSd5GQI4TvgYWD9LGSoBzgYRVEOIIRwFlgBrE2Jnwa6gU8k/Z1KB81sNfAG8LzHVb7l/CnWlVT0zawJ\
                        2AE8k+BrwpPyhKQrpf7VVXnQr/KCfxu4AVxKeiQk6Gg98Jj/CY76k+1XSXeKYf8BY8YQYa6jEdEAAAAASUVORK5CYII='
			},
			options: [
				{
					id: 'active_look_dropdown',
					type: 'dropdown',
					label: 'Active Look',
                    choices: [
                        { id: 'manually_specify_lookid', label: 'Manually Specify Look ID Below' },
                    ],
					default: '',
				},
                {
					id: 'active_look_text',
					type: 'textinput',
					label: 'Active Look',
                    isVisible: ((options) => options.active_look_dropdown == 'manually_specify_lookid'),
					default: '',
                    useVariables: true,
				},
			],
			callback: async (feedback, context) => {
                let look_id:string =''
                if (feedback.options.active_look_dropdown == 'manually_specify_lookid') {
                    look_id = await context.parseVariablesInString(feedback.options.active_look_text as string)
                } else {
                    look_id = feedback.options.active_look_dropdown as string
                }

                instance.log('debug', 'look_id selected = ' + look_id + ' instance.propresenterStateStore.activeLookID.id.uuid = ' + instance.propresenterStateStore.activeLookID.id.uuid)
                return instance.propresenterStateStore.activeLookID.id.index == parseInt(look_id) || instance.propresenterStateStore.activeLookID.id.uuid == look_id || instance.propresenterStateStore.activeLookID.id.name == look_id
                
		    },
        },
    }

    // Update look choices with data from propresenterStateStore
	const active_look_dropdown = feedbackDefinitions.ActiveLook?.options[0] as CompanionInputFieldDropdown
	const manual_look_choice = active_look_dropdown.choices.pop() // The last item in the looks choices list (after all the current looks list from ProPresenter) is ALWAYS a placeholder, that when selected, allows for manually specifing the Look (in another text input)
	active_look_dropdown.choices = instance.propresenterStateStore.looksChoices.concat(manual_look_choice as DropdownChoice)
	active_look_dropdown.default = active_look_dropdown.choices[0].id

    return feedbackDefinitions
}