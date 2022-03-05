import { pattern } from './pattern'
import * as S from './styles'


const Pattern = () => {
  return (
    <S.Container>
      {pattern.map(({ children, gap, spacing, ...props}, index) => (
        <S.Wrapper key={index} gap={gap} spacing={spacing}>
          <S.Shimmer  {...props} />
          {children && (
            <>
              <S.Separator />
              <S.Shimmer  {...children} />
            </>
          )}
        </S.Wrapper>
      ))}
    </S.Container>
  )
}

export { Pattern }
