/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepenseModule } from './depense/depense.module';
import { RevenuModule } from './revenu/revenu.module';
import { SoldeModule } from './solde/solde.module';
import { Depense } from './depense/entity/depense.entity';
import { Revenu } from './revenu/entity/revenu.entity';
import { Solde } from './solde/entity/solde.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@salem123',
      database: 'budgetcalculator',
      entities: [Depense, Revenu, Solde],
      synchronize: true,
    }),
    DepenseModule,
    RevenuModule,
    SoldeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
