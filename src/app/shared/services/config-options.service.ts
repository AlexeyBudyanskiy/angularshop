import { Injectable } from '@angular/core';
import { Configuration } from '../models/configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  public configuration: Configuration;
  constructor() {
    this.configuration = ({ } as Configuration);
   }

  public setConfiguration(config: Configuration): void{
    if (config.id != null){
      this.configuration.id = config.id;
    }

    if (config.email != null){
      this.configuration.email = config.email;
    }

    if (config.login != null){
      this.configuration.login = config.login;
    }
  }

  public getConfiguration(): Configuration{
    return this.configuration;
  }
}
