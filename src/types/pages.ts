type IntroductionVersionsProps<T> = {
  [Property in keyof T]: T[Property]
}

export type IntroductionProps = {
  title: string
  subtitle: string
  patch: string
  dataApi: string
  versions: IntroductionVersionsProps<Object>
  body: string
}

export type PagesProps = {
  introduction: IntroductionProps
}
