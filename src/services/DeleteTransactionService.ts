import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const transactionsId = await transactionRepository.findOne({
      where: { id },
    });

    if (!transactionsId) {
      throw new AppError('Transaction id not found!', 400);
    }

    await transactionRepository.remove(transactionsId);
  }
}

export default DeleteTransactionService;
