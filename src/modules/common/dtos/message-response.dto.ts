import { ApiProperty } from '@nestjs/swagger';

export class MessageResponseDto {
  @ApiProperty({
    example: 'Success',
    description: 'Response message',
  })
  message: string;
}
