type Pattern = {
  width: number;
  height: number;
  gap?: number;
  spacing?: 'small' | 'large',
  children?: {
    width: number,
    height: number,
  },
}

const pattern: Pattern[] = [
  {
    width: 250,
    height: 20
  },
  {
    width: 60,
    height: 20,
    spacing: 'small',
  },
  {
    width: 120,
    height: 20
  },
  {
    gap: 20,
    width: 100,
    height: 20
  },
  {
    width: 40,
    height: 20,
    spacing: 'small',
    children: {
      width: 30,
      height: 20,
    },
  },
  {
    width: 170,
    height: 30,
  },
  {
    width: 120,
    height: 20,
    spacing: 'small',
  },
  {
    width: 210,
    height: 20,
    gap: 20,
  },
  {
    width: 70,
    height: 30,
    spacing: 'small',
    children: {
      width: 30,
      height: 30,
    },
  },
  {
    width: 270,
    height: 20
  },
  {
    width: 100,
    height: 20,
    spacing: 'small',
  },
  {
    gap: 20,
    width: 60,
    height: 20,
    children: {
      width: 30,
      height: 20,
    },
  },
  {
    width: 20,
    height: 20,
    spacing: 'small',
    children: {
      width: 70,
      height: 20,
    },
  },
  {
    width: 270,
    height: 20
  },
]

export { pattern }
