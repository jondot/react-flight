import flight from '../core/flight'
import { Oval, Rect } from './ui'
import Controls from './controls'
const Flight = flight(Rect, Controls)

export default Flight
export { Oval, Rect }
