import styled from 'styled-components'

const Figure = styled.figure`
  height: ${({ size }: { size?: string }): string => (size ? size : '250px')};
  width: ${({ size }: { size?: string }): string => (size ? size : '250px')};
`

const SVG = styled.svg`
  display: flex;
`
const Circle = styled.circle`
  display: flex;
`
const Group = styled.g`
  transform: translateX() (0.25em);
`

const Number = styled.text`
  font-size: 0.6em;
  line-height: 1;
  text-anchor: middle;
  transform: translateY(-0.25em);
`
const Text = styled.text`
  font-size: 0.2em;
  text-transform: uppercase;
  text-anchor: middle;
  transform: translateY(1.9em);
`
const Figcaption = styled.figcaption`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
`

const Bullet = styled.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  border-radius: 50%;
  background: ${(props: { bullet: string }): string => props.bullet};
`
const Caption = styled.span`
  padding-left: 0.25em;
`
export const Styled = {
  Figure,
  SVG,
  Circle,
  Group,
  Number,
  Text,
  Figcaption,
  Caption,
  Bullet,
}
