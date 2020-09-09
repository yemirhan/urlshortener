import { Entity, Property, OneToMany, Collection } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';
import { ShortURL } from './ShortURL';

@Entity()
export class User extends BaseEntity {
  @Property()
  userName!: string;

  @Property()
  email!: string;

  @Property()
  password!: string;

  @OneToMany(() => ShortURL, (shorturl) => shorturl.user)
  urls = new Collection<ShortURL>(this);

  constructor(userName: string, email: string, password: string) {
    super();
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
}
