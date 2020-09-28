```js
import { Media, Bd, Img } from '../Media'
import UIChip from '../Chip'
import { Bold, Caption } from '../Text'
import Icon from '../Icon'
import Circle from '../Circle'

import Variants from 'docs/components/Variants'

const fnacLogoURL = 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fnac_Logo.svg';

const Chip = React.memo(({ children, ...props }) => (
  <UIChip
    variant="outlined"
    className='u-mr-0 u-mb-0'
    size='small'
    children={children} {...props}
  />
))

const ChipImage = React.memo(({ src }) => (
  <img className='u-mr-half' src={src} height='50%' />
))

const compositeStyle = {
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)',
  boxSizing: 'border-box', 
}


const CompositeImage = () => (
  <Circle backgroundColor='var(--melon)'>
    <Icon icon='wallet' />
  </Circle>
)

const Amount = () => (
  <Bold tag='span'>12,15€</Bold>
)

const onDotsClick = () => { alert('clicked dots !')}
const Dots = () => (
  <Icon className="u-c-pointer" color="var(--coolGrey)" icon="dots" onClick={onDotsClick}/>
)

const Chips = () => (
  <Bd className='u-row-xs'>
    <Chip>
      <ChipImage src={fnacLogoURL} /> Fnac
    </Chip>
    <Chip>
      <ChipImage src={fnacLogoURL} /> Fnac
    </Chip>
  </Bd>
)

const Actions = ({ extraInformation }) => (
  <Media>
    <Bd className='u-row-xs'>
      <Chip>
        <ChipImage src={fnacLogoURL} /> Fnac
      </Chip>
      <Chip>
        <ChipImage src={fnacLogoURL} /> Fnac
      </Chip>
    </Bd>
    { extraInformation ? <Shrink><Caption>Extra information to the right of the card</Caption></Shrink> : null }
  </Media>
)

const Shrink = Img

const initialVariants = [
  { chips: true, secondaryText: true, dots: true, icon: true, extraInformation: true },
  { chips: false, secondaryText: true, icon: true, dots: true },
  { dense: true, chips: false, secondaryText: false, dots: false, icon: true },
  { chips: false, secondaryText: false, dots: false, icon: false },
  { dense: true, chips: false, secondaryText: false, dots: false, icon: false }
];

<Variants initialVariants={initialVariants}>{
  (variant, i) => (
    <CompositeRow
      key={i}
      primaryText='Primary text'
      secondaryText={variant.secondaryText ? 'Secondary Text' : null}
      image={variant.icon ? <CompositeImage /> : null}
      right={<>
        <Shrink><Amount /></Shrink>
        { variant.dots ? <Shrink><Dots /></Shrink> : null }
      </>}
      actions={variant.chips ? <Actions extraInformation={variant.extraInformation} /> : null}
      dense={variant.dense}
      style={compositeStyle}
    />
  )
}</Variants>

```
