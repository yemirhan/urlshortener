import { Entity, Property, ManyToOne } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';
import { User } from './User';

@Entity()
export class ShortURL extends BaseEntity {
  @Property()
  fullURL!: string;

  @Property()
  shortURL!: string;

  @Property()
  click!: number;

  @ManyToOne(() => User) // or you can specify the entity as class reference or string name
  user?: User;

  constructor(fullURL: string, shortURL: string) {
    super();
    this.fullURL = fullURL;
    this.shortURL = shortURL;
  }
}
