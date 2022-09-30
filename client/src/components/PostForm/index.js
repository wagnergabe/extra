import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
// line below still needs QUERY_ME in there, I think, just haven't set it up //
import { QUERY_POSTS } from '../../utils/queries';

