import { AfterViewChecked, AfterViewInit, Component, Inject, OnInit, Optional } from '@angular/core';
import { Configuration } from '../../models/configuration';
import { AppSettingsService } from '../../services/app-settings.service';
import { ConfigOptionsService } from '../../services/config-options.service';
import { ConstantsService, v1Constants } from '../../services/constants.service';
import { GeneratorFactory, RandomString } from '../../services/generator.factory';
import { GeneratorService } from '../../services/generator.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [ ConfigOptionsService,
    { provide: ConstantsService , useValue: v1Constants },
    { provide: RandomString, useFactory: GeneratorFactory(7), deps: [GeneratorService] }]
})
export class TestComponent implements OnInit, AfterViewInit {

  public version: string;
  constructor(
    @Optional() public configOptionsService: ConfigOptionsService,
    @Optional() public constants: ConstantsService,
    @Inject(RandomString) public randomString: string,
    private appSettingService: AppSettingsService) {
      const config = {id: '1', email: 'email@gmail.com'} as Configuration;
      this.configOptionsService.setConfiguration(config);
     }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.appSettingService.getSettings().subscribe(settings => {
      console.log(JSON.stringify(settings));
      this.version = settings.Source;
    });
  }

}
