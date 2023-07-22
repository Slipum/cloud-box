import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@test.com',
  })
  email: string;

  @ApiProperty({
    default: 'Mr Smith',
  })
  fullName: string;

  @ApiProperty({
    default: '12345678',
  })
  password: string;
}
