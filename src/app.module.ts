import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '	mahmud.db.elephantsql.com',
      port: 5432,
      username: 'bufdzvtf',
      password: 'pJ1sbmYOvgLnBqUkgrVDgdPoxF2Trn1S',
      database: 'bufdzvtf',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
