import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    /**  Iniciando módulo do Prisma client */
    async onModuleInit() {
        await this.$connect();
    }
}
