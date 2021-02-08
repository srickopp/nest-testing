
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../../entities/user.entity';
 
export default class UserSeeds implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const get_users = await connection.getRepository(User).count();    

    if(get_users == 0){
        const hash_password = bcrypt.hashSync('admin', 10);
        await connection
            .createQueryBuilder()
            .insert()
            .into(User)
            .values({
                email: 'admin@gmail.com',
                password: hash_password
            })
            .execute()
    }
  }
}
