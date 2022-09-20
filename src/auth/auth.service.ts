import {
  Injectable,
  HttpException,
  HttpStatus,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwt: JwtService,
  ) {}

  async signup(authDto: AuthDto): Promise<User> {
    const userFound = await this.userRepository.findOne({
      where: { email: authDto.email },
    });
    if (userFound)
      throw new ConflictException(`User with email: ${authDto.email} exists!`);
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(authDto.password, salt);
    authDto.password = hash;
    return await this.userRepository.save(authDto);
  }

  async validateUser(email: string, password: string): Promise<any> {
    const foundUser = await this.userRepository.findOne({ where: { email } });
    if (foundUser) {
      if (await bcrypt.compare(password, foundUser.password)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = foundUser;
        return result;
      }

      return null;
    }
    return null;
  }
  async login(user: any) {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwt.sign(payload),
    };
  }
}
