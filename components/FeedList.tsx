import { colors } from "@/constants";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import FeedItem from "./FeedItem";

const dummyData = [
  {
    id: 1,
    userId: 1,
    title: "더미제목",
    description:
      "더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용",
    createdAt: "2025-05-30",
    author: {
      id: 1,
      nickname: "킹수수",
      imageUri: "",
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
  {
    id: 2,
    userId: 2,
    title: "더미제목2",
    description:
      "22더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용",
    createdAt: "",
    author: {
      id: 2,
      nickname: "킹수수2",
      imageUri: "",
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 2,
    commentCount: 2,
    viewCount: 2,
  },
  {
    id: 3,
    userId: 3,
    title: "더미제목3",
    description:
      "33더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용더미내용",
    createdAt: "",
    author: {
      id: 3,
      nickname: "킹수수",
      imageUri: "",
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 3,
    commentCount: 3,
    viewCount: 3,
  },
];

function FeedList() {
  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => <FeedItem post={item} />}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: colors.GRAY_200,
    gap: 12,
  },
});

export default FeedList;
