export type Activity = {
  id: number;
  title: string;
  type: string;
};

export type Topic = {
  id: number;
  name: string;
  mapel: number;
  activities: Activity[];
  start_date: string;
  end_date: string;
};

export type Subject = {
  id: number;
  name: string;
  topic_set: Topic[];
};
