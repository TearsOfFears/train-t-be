import { Column, Entity, OneToMany } from 'typeorm'
import { EnhancedBaseEntity } from '../../common/entities/enhanced-base.entity'
import { TrainEntity } from '../../train/entities/train.entity'

@Entity()
export class UserEntity extends EnhancedBaseEntity {
  @Column({ unique: true })
  email: string

  @Column({
    default: '',
  })
  name: string

  @Column({
    default: '',
  })
  surname: string

  @Column()
  password: string

  @OneToMany(() => TrainEntity, (train) => train.owner, {
    onDelete: 'CASCADE',
  })
  trains: TrainEntity[]
}
