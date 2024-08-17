/* eslint-disable prettier/prettier */
import { Column } from "typeorm";

export class Revenudto {
  @Column()
  titre: string;

  @Column()
  montant: number;
}