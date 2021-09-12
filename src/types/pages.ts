type IntroductionVersionsProps<T> = {
  [Property in keyof T]: T[Property]
}

export type IntroductionProps = {
  title: string
  subtitle: string
  baseUrl: string
  dataApi: string
  versions: IntroductionVersionsProps<Object>
  body: string
}

export type PagesProps = {
  introduction: IntroductionProps
}
