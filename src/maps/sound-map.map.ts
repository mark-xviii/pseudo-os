import * as quake_explosion from '../assets/sounds/quake_explosion.ogg'

const SoundMap = {
  explosion: quake_explosion,
}

for (const sound of Object.values(SoundMap)) {
  console.log(`Audio preload: ${sound.default}`)
  new Audio(sound.default).load()
}

export default SoundMap
