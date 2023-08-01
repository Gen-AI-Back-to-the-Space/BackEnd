export interface UserEntity {
  /**
   * @type int
   */
  id: number;

  /**
   * @format email
   */
  email: string;

  password: string;

  name: string;

  nickname: string;

  /**
   * @format date-time
   */
  createdAt: string | null;

  /**
   * @format date-time
   */
  updatedAt: string | null;

  /**
   * @format date-time
   */
  deletedAt: string | null;
}
