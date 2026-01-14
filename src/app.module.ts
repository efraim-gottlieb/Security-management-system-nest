import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './users/user.model';
import { ShiftsModule } from './shifts/shifts.module';


@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    synchronize: true,
    password: 'root',
    database: 'military',
    models: [User],
    autoLoadModels: true,  

  }),
    AuthModule, UsersModule, ShiftsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
