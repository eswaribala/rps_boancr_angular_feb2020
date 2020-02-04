export class Menu
{
  private _label:string;
  private _icon:string;
  private _routerLink:string;
  private _items:SubMenu[];


  constructor(label: string, icon: string, routerLink: string, items: SubMenu[]) {
    this._label = label;
    this._icon = icon;
    this._routerLink = routerLink;
    this._items = items;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get routerLink(): string {
    return this._routerLink;
  }

  set routerLink(value: string) {
    this._routerLink = value;
  }

  get items(): SubMenu[] {
    return this._items;
  }

  set items(value: SubMenu[]) {
    this._items = value;
  }


}

export class SubMenu
{
  private _label:string;
  private _icon:string;
  private _routerLink:string;


  constructor(label: string, icon: string, routerLink: string) {
    this._label = label;
    this._icon = icon;
    this._routerLink = routerLink;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get routerLink(): string {
    return this._routerLink;
  }

  set routerLink(value: string) {
    this._routerLink = value;
  }


}
