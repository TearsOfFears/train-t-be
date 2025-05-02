export interface UserProps {
  id: string
  name: string
  surname: string
  email: string
  password: string
}

export class UserModel implements UserProps {
  id: string
  name: string
  surname: string
  email: string
  password: string

  private constructor(props: UserProps) {
    Object.assign(this, props)
  }

  static from(props: UserProps): UserModel {
    return new UserModel(props)
  }

  toPlain() {
    return { ...this }
  }
}
