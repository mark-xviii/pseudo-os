export interface NameActionPairInterface {
  name: string
  action?: Function
}

export default class ToolbarCategory {
  public id: string = ''
  public actions?: NameActionPairInterface[] = []
  public name: string = ''
  public isActive?: boolean = false
}
