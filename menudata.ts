import {Menu,SubMenu} from "./menu";


let menuData:Menu[]=[new Menu('Account Summary','','',
  [new SubMenu('Transactions','','')]),

  new Menu('Requests','','',
    [new SubMenu('Cheque Request','',''),
    new SubMenu('Address Change','','')]),

  new Menu('Fund Transfer','','',
    [new SubMenu('NEFT','',''),
      new SubMenu('RTGS','',''),
      new SubMenu('IMPS','','')])

]
