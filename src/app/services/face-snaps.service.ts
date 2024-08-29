import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Archibald',
      'The best dog in the world',
      'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
      new Date(),
      6,
    ),
    new FaceSnap(
      'Bella',
      'The best cat in the world',
      'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
      new Date(),
      10,
    ).withLocation('Paris'),
    new FaceSnap(
      'Coco',
      'The best bird in the world',
      'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
      new Date(),
      156,
    ),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap : FaceSnap | undefined = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error(`FaceSnap with id ${faceSnapId} not found`);
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap : FaceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }
}
