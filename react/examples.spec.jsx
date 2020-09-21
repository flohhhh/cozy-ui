import testFromStyleguidist from '../test/testFromStyleguidist'
import path from 'path'

// Popper does not work well inside of jest as it heavily relies on DOM APIs (see https://github.com/popperjs/popper-core/issues/478).
jest.mock('@material-ui/core/Popper', () => {
  return ({ children }) => children
})

const makeRequire = subpath => m => {
  if (m.indexOf('.') === 0) {
    return require('./' + path.join(subpath, m))
  } else {
    return require(m)
  }
}

const testComponent = (ComponentName, options) => {
  testFromStyleguidist(
    ComponentName,
    path.join(__dirname, ComponentName, 'Readme.md'),
    makeRequire(ComponentName),
    options
  )
}

// Please keep the list sorted
testComponent('ActionMenu', { delay: 100 })
testComponent('AppTitle')
testComponent('Avatar')
testComponent('Badge')
testComponent('BarButton')
testComponent('Button')
testComponent('Card')
testComponent('Checkbox')
testComponent('ContactsList')
testComponent('ContactsListModal')
testComponent('DateMonthPicker')
testComponent('Dialog')
testComponent('Empty')
testComponent('Field')
testComponent('Hero')
testComponent('HistoryRow')
testComponent('Icon')
testComponent('IconButton')
testComponent('IconStack')
testComponent('Infos')
testComponent('InfosCarrousel')
testComponent('InlineCard')
testComponent('InputGroup')
testComponent('Label')
testComponent('Labs/CollectionField')
testComponent('ListItemText')
testComponent('Media')
testComponent('Menu')
testComponent('NarrowContent')
testComponent('OrderedList')
testComponent('PasswordExample')
testComponent('PercentageBar')
testComponent('PercentageLine')
testComponent('QuotaAlert')
testComponent('Radio')
testComponent('SelectBox')
testComponent('Sidebar')
testComponent('Spinner')
testComponent('Switch')
testComponent('Table')
testComponent('Tabs')
testComponent('Text')
testComponent('Textarea')
testComponent('ThresholdBar')
testComponent('UnorderedList')
testComponent('Wizard')
