import { UserEntity } from 'src/app/domain/user-entity';

export interface UserState {
  User: UserEntity;
  IsAuthenticated: boolean;
  IsLoading: boolean;
  ErrorMessage: string | null;
}
