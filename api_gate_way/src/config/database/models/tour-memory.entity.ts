export interface TourMemoryEntity {
  /**
   * @type int
   */
  id: number;

  /**
   * @type int
   */
  userId: number;

  spaceClass: string;

  spaceName: string;

  address: string;

  x: string;

  y: string;

  /**
   * @format date-time
   */
  travelDate: string;

  memo: string;

  /**
   * @format date-time
   */
  createAt: string;

  /**
   * @format date-time
   */
  updatedAt: string | null;

  /**
   * @format date-time
   */
  deletedAt: string | null;
}
