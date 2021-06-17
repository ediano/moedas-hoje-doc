import NextImage, { ImageProps } from 'next/image'

type Props = ImageProps

const Image = ({ src, ...rest }: Props) => {
  return <NextImage src={`/imagens/${src}`} {...rest} />
}

export default Image
