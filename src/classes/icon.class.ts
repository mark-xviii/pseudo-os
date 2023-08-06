abstract class Icon {
  public id: string | null = null
  public imageURL: string | null = null
  public alias: string | null = null
  // public width: number | null = null
  // public height: number | null = null
  public x: number | null = null
  public y: number | null = null

  protected changeCoordinates(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

export default Icon
