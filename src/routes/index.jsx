import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Page404 from '../pages/Page404';
import mainpage from '../pages/mainpage';
import criacao1 from '../pages/criacao1';
import criacao2 from '../pages/criacao2';
import criacao3 from '../pages/criacao3';
import criacao4 from '../pages/criacao4';
import criacao5 from '../pages/criacao5';
import analise from '../pages/analise';
import alvophishing from '../pages/alvophishing';
import gerenciaphishing from '../pages/gerenciaphishing';
import criarphishing from '../pages/criarphishing';
import campanhamanager from '../pages/campanhamanager';

export default function Routes() {
  return (
    <Switch>
      <MyRoute path="/mainpage" component={mainpage} />
      <MyRoute path="/" component={mainpage} />
      <MyRoute path="/alvo" component={alvophishing} />
      <MyRoute path="/criacao1" component={criacao1} />
      <MyRoute path="/criacao2" component={criacao2} />
      <MyRoute path="/criacao2" component={criacao3} />
      <MyRoute path="/criacao4" component={criacao4} />
      <MyRoute path="/criacao5" component={criacao5} />
      <MyRoute path="/campmanager" component={campanhamanager} />
      <MyRoute path="/analise" component={analise} />
      <MyRoute path="/phishings" component={gerenciaphishing} />
      <MyRoute path="/criarphishing" component={criarphishing} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
