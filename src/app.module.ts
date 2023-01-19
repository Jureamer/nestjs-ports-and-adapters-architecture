import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { VoteModule } from './vote/vote.module';
import { GoogleSearchModule } from './google-search/google-search.module';

@Module({
    imports: [MemberModule, VoteModule, GoogleSearchModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
