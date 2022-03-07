import BezierCurveWhite from '../../assets/bezier-curve/white.svg'
import BezierCurveOrange from '../../assets/bezier-curve/orange.svg'

import BlocksCheckmarkWhite from '../../assets/blocks-checkmark/white.svg'
import BlocksCheckmarkOrange from '../../assets/blocks-checkmark/orange.svg'

import HierarchyWhite from '../../assets/hierarchy/white.svg'
import HierarchyOrange from '../../assets/hierarchy/orange.svg'

import IphoneWhite from '../../assets/iphone/white.svg'
import IphoneOrange from '../../assets/iphone/orange.svg'

import LaptopWhite from '../../assets/laptop/white.svg'
import LaptopOrange from '../../assets/laptop/orange.svg'

import ProgramingWhite from '../../assets/programing/white.svg'
import ProgramingOrange from '../../assets/programing/orange.svg'

import TerminalWhite from '../../assets/terminal/white.svg'
import TerminalOrange from '../../assets/terminal/orange.svg'

type Icons = {
  [key: string]: Record<string, React.ReactNode>
}

const icons: Icons = {
  'bezier-curve': {
    white: <BezierCurveWhite />,
    orange: <BezierCurveOrange />,
  },

  'blocks-checkmark': {
    white: <BlocksCheckmarkWhite />,
    orange: <BlocksCheckmarkOrange />,
  },

  'hierarchy': {
    white: <HierarchyWhite />,
    orange: <HierarchyOrange />,
  },

  'iphone': {
    white: <IphoneWhite />,
    orange: <IphoneOrange />,
  },

  'laptop': {
    white: <LaptopWhite />,
    orange: <LaptopOrange />,
  },

  'programing': {
    white: <ProgramingWhite />,
    orange: <ProgramingOrange />,
  },

  'terminal': {
    white: <TerminalWhite />,
    orange: <TerminalOrange />,
  },
}

export { icons }
