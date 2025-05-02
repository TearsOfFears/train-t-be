import { ApiProperty } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator'

export class CreateTrainDto {
  @ApiProperty({
    description: 'Name of the train',
    type: String,
  })
  @IsNotEmpty({ message: 'Name is required' })
  name: string

  @ApiProperty({
    description: 'City where the train departs from',
    type: String,
  })
  @IsString()
  @IsNotEmpty({ message: 'Start City is required' })
  @MinLength(3, { message: 'Start City must be at least 3 characters' })
  startCity: string

  @ApiProperty({
    description: 'City where the train arrives at',
    type: String,
  })
  @IsString()
  @IsNotEmpty({ message: 'End City is required' })
  @MinLength(3, { message: 'End City must be at least 3 characters' })
  endCity: string

  @ApiProperty({
    description: 'Departure time of the train',
    type: String,
  })
  @IsString()
  @IsNotEmpty({ message: 'Departure is required' })
  departure: string

  @ApiProperty({
    description: 'Arrival time of the train',
    type: String,
  })
  @IsString()
  @IsNotEmpty({ message: 'Arrival is required' })
  arrival: string

  @ApiProperty({
    description: 'Number of available seats in the train',
    type: Number,
  })
  @IsNumber()
  @Min(1, { message: 'Minimum 1 seat' })
  @Max(600, { message: 'Maximum 600 seats' })
  @IsNotEmpty({ message: 'Available Seats is required' })
  availableSeats: number

  @ApiProperty({
    description: 'Price of the train ticket',
    type: Number,
  })
  @IsNumber()
  @Min(10, { message: 'Minimum price is 10' })
  @Max(3000, { message: 'Maximum price is 3000' })
  @IsNotEmpty({ message: 'Price is required' })
  price: number
}
