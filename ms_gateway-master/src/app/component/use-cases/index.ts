import createPost from './post';
import config from '../../config';
import { logger } from '../../libs/logger';
import { makeInputObj } from '../entities';
import {
  setCache,
  makeFetch
} from '../data-access';
import { insertOneDocument } from '../../libs/mongodb';

const errorMsgs = config.ERROR_MSG;

const post = ({ params, path }) =>
  createPost({
    makeInputObj,
    makeFetch,
    setCache,
    logger
  }).post({
    params,
    path,
    JWTSecret: config.JWT_SECRET,
    cacheConfig: config.CACHE_CONFIG,
    errorMsgs: errorMsgs.post
  });

export {
  post
}
