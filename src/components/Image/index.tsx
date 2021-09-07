import NextImage, { ImageProps } from 'next/image'

type Props = ImageProps

const Image = ({ src, ...rest }: Props) => {
  return <NextImage src={`/images/${src}`} {...rest} />
}

export default Image
