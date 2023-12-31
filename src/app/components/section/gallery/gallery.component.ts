import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IAlbum, Lightbox, LightboxEvent, LightboxConfig, IEvent, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() albums !: Array<IAlbum>;
  public subscription !: Subscription;

  constructor(private lightbox: Lightbox, private lightboxEvent: LightboxEvent, private lighboxConfig: LightboxConfig, private sanitizer: DomSanitizer) {
    this.albums = this.albums ? this.albums : [];
    lighboxConfig.fadeDuration = 1;
  }

  ngOnInit(): void {}

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


  open(index: number): void {
    this.subscription = this.lightboxEvent.lightboxEvent$.subscribe((event: any) => this._onReceivedEvent(event));
    this.lightbox.open(this.albums, index, { wrapAround: true, showImageNumberLabel: true });
  }

  private _onReceivedEvent(event: IEvent): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this.subscription.unsubscribe();
    }
  }

}
