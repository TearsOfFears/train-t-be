import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { EnhancedBaseEntity } from '../../common/entities/enhanced-base.entity'
import { UserEntity } from '../../user/entities/user.entity'
import { TrainStatusEnum } from '../interfaces/train-status.enum'

@Entity()
export class TrainEntity extends EnhancedBaseEntity {
  @Column()
  name: string

  @Column()
  startCity: string

  @Column()
  endCity: string

  @Column()
  departure: string

  @Column()
  arrival: string

  @Column({ type: 'int', default: 0 })
  availableSeats: number

  @Column({ type: 'float', default: 0 })
  price: number

  @Column({
    default: TrainStatusEnum.NOT_STARTED,
  })
  status: TrainStatusEnum

  @ManyToOne(() => UserEntity, (user) => user.trains, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Column({ nullable: true })
  ownerId: string
}
